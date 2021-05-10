import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTracker, withTracker } from 'meteor/react-meteor-data';
import { LogCollection } from '../../../../db/LogCollection';
import { ChatCollection } from '../../../../db/ChatCollection';
import { TwitterPicker } from 'react-color';
import { Meteor } from 'meteor/meteor';
import { IChat } from '../../../../db/type/IChat';
import { ILog } from '../../../../db/type/ILog';

export const Chat = ({loading, logs}) => {
    const [color, setColor] = useState('');
    const [name, setName] = useState('');
    const [contents, setContents] = useState('');
    const contentsRef = useRef(null);

    const chats: IChat[] = useTracker(() => {
        const handles = Meteor.subscribe('getChats');
        const loading = !handles.ready();
        const list = ChatCollection.find().fetch()
        console.log('loading', loading)
        console.log('list', list)
        return ChatCollection.find().fetch();
    });
    // const chats: IChat[] = list;

    // const logs: ILog[] = useTracker(() => {
    //     return LogCollection.find().fetch();
    // });

    useEffect(() => {
        // 정보조회
        const nick = window.localStorage.getItem('nickname');
        const color = window.localStorage.getItem('color');

        console.log(chats)
        console.log(logs)

        nick ? setName(nick) : setName('Guest');
        color ? setColor(color) : setColor("#8ED1FC");

        // 스크롤 이벤트 적용
        const chatArea: Element|null = document.querySelector("#chat-area");
        if(chatArea) {
            chatArea.scrollTo(0,chatArea.scrollHeight); //채팅방 맨 밑으로 스크롤 이동
            chatArea.addEventListener('scroll', () => handleScroll()); // 스크롤 이벤트 추가
        }
        return () => {
            window.removeEventListener('scroll', () => {})
        }
    },[])

    // useEffect(() => {
    //     console.log('useEffect chats:', chats)
    // }, [chats])

    // useEffect(() => {
    //     console.log('useEffect logs:', logs)
    // }, [logs])

    /**
     * @function handleScroll 채팅방 스크롤 이벤트
     */
    const handleScroll = useCallback(() => {
        const chatArea: Element|null = document.querySelector("#chat-area");
        const gobottom: Element|null = document.querySelector(".btn-gobottom");
        if(chatArea && gobottom) {
            gobottom.style.bottom = (10-chatArea.scrollTop) + "px";
        }
    }, []);

    const onSubmitChat = (e) => {
        e.preventDefault();

        if(!name) {
            alert('닉네임을 입력해주세요.');
            return;
        } else if (!contents) {
            alert('내용을 입력해주세요.');
            contentsRef.current.focus();
            return;
        }

        window.localStorage.setItem('nickname', name);
        window.localStorage.setItem('color', color);

        Meteor.call('insertChat', !color ? "#b1edff" : color, name, contents);
        document.querySelector("#chat-area").scrollTo(0,document.querySelector("#chat-area").scrollHeight);
        setContents('');
    }
    
    const goScrollBottom = () => {
        document.querySelector("#chat-area").scrollTo(0,document.querySelector("#chat-area").scrollHeight);
    }

    const onNameChange = (value: string) => {
        setName(value);
    }

    const onContentsChange = (value: string) => {
        setContents(value);
    }

    const onRemove = (id: string) => {
        Meteor.call('removeChat', id);
    }

    const getDate = (createAt: string) => {
        let date = new Date(createAt)
        let result = date.getFullYear() + '년 ' + (date.getMonth()+1) + '월 ' + date.getDate() + '일 ';
        result += date.getHours() +':' + date.getMinutes();

        return result;
    }

    const onClickReset = () => {
        if(confirm('일괄 삭제하시겠습니까?')){
            Meteor.call('initChat', name)
        }
    }
    const onClickUserReset = () => {
        if(confirm(name+'님의 데이터를 모두 삭제하시겠습니까?')){
            Meteor.call('removeUserChat', name);
        }
    }

    const checkHyperLink = (contents: string) => {
        if(contents.includes("http"))
            return <a href={contents} target="_blank">{contents}</a>
        else
            return contents;
    }

    const onChangeColor = (color) => {
        console.log(color);
        setColor(color.hex)
    }
      
    return (
        <div>
            <h1 id="chat-title">채팅방</h1>

            <button type="button" className="btn-reset cm-w-50p" onClick={()=>onClickUserReset()}>내것만삭제</button>
            <button type="button" className="btn-reset cm-w-50p" onClick={()=>onClickReset()}>일괄삭제</button>

            <div id="chat-area">
                <div className="chat-contents">
                    {chats && chats.map( chat => (
                        <div key={chat._id} className="chat-contents-inner">
                            <div>
                                <div className="chat-remove" onClick={()=>onRemove(chat._id)}>X</div>
                                <div className="chat-date">{getDate(chat.createdAt.toString())}</div>
                                <div>
                                    <div className="chat-nickname" style={{backgroundColor: chat.color}}>{chat.name}</div>
                                    <div className="chat-contents">{checkHyperLink(chat.contents)}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="chat-contents-bottom"></div>
                    <div className="btn-gobottom" onClick={goScrollBottom}>맨 밑으로</div>
                </div>
            </div>

            <div id="chat-form">
                <form onSubmit={(e) => onSubmitChat(e)}>
                    <input name="name" value={name} type="text" placeholder="닉네임"
                        onChange={e => onNameChange(e.target.value)}></input>
                    <input ref={contentsRef} name="contents" type="text" value={contents} placeholder="채팅 내용을 작성해주세요."
                        onChange={e => onContentsChange(e.target.value)}></input>
                    <button className="btn-submit" type="submit" >입력</button>
                    <TwitterPicker 
                        color={ color }
                        onChangeComplete={ onChangeColor }
                    />
                </form>
            </div>

            <div id="chat-logs">
                {logs && logs.map( log => {
                    return (
                        <>
                            <span>{log._id}</span>
                            <span>{log.log}</span>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default withTracker(() => {
	const handles = Meteor.subscribe('getLogs');
	const loading = !handles.ready();
    const list = LogCollection.find().fetch()
    console.log('loading', loading)
    console.log('list', list)
	return {
		loading,
		logs: list,
	};
})(Chat);