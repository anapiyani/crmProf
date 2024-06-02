import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import './teacherAi.scss';

const TeacherAi = () => {
    return (
        <div className="teacher-ai">
            <div className="teacher-ai-content">
                <div className="chat-content">
                    <div className="chat-header">
                        <div className="ai-name">
                            <SmartToyOutlinedIcon />
                            <p>Chat AI</p>
                        </div>
                        <div className="settings">
                            {/* onclick add open menu :) */}
                            <MoreVertOutlinedIcon className="menu-icon" />
                        </div>
                    </div>
                    {/* here is menu that we gonna add when we gotta add functions*/}
                    {/* <div className={`vertical-menu ${menuOpen ? 'open' : ''}`}>
                        <ul>
                            <li>Option 1</li>
                            <li>Option 2</li>
                            <li>Option 3</li>
                            <li>Option 4</li>
                        </ul>
                    </div> */}
                    <div className="chat">
                        <div className="messages">
                            <div className="message bot">
                                <SmartToyOutlinedIcon />
                                <p>Hello! How can I help you today?</p>
                            </div>
                            <div className="message user">
                                <p>Hi! I need some help :D</p>
                            </div>
                            <div className="message bot">
                                <SmartToyOutlinedIcon />
                                <p>Sure! What are you working on?</p>
                            </div>
                            <div className="message user">
                                <p>Aight, what can u do for me?</p>
                            </div>
                            <div className="message bot">
                                <SmartToyOutlinedIcon />
                                <p>Typing...</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-send">
                        <form className="form">
                            <OutlinedInput className='inputOutlined' placeholder='message...' />
                            <Button type="submit" className='formSendButton' variant="text"><SendOutlinedIcon/></Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherAi;
