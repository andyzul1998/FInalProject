import React from 'react';


function Chat() {
  const [chat, setChat] = React.useState(false);
  const [chatSub, setChatSub] = React.useState(false);

  const handleChat = () => {
    setChat(!chat);
  };

  const handleSubmit = () => {
    setChatSub(!chatSub);
  };

  return (
  
      <div style={{position:"fixed", bottom:0,right:0 }}>
        <div onClick={handleChat} style={{height:50, lineHeight:'50px', cursor:"pointer", paddingLeft:80, paddingRight:80, borderRadius:"20px 20px 0px 0px", background:"blue"}}>
            <h3 style={{color:"white"}}>Chat Disini</h3>
        </div>
        {chat &&

          (chatSub ? (
            <div style={{minHeight:400, background:"white", padding:20, position:"relative"}}>
              <div style={{float:"left"}}>
                Penerima
              </div>
              <div style={{clear:"both"}}/>
              <div style={{float:"Right"}}>
                Pengirim
              </div>
            
              <div style={{position:"fixed", bottom:0}}>
                <textarea rows="6" style={{padding:10, width:"110%"}} placeholder="masukkan pesan"/>
              </div>
            </div>
          ):(
            <div style={{minHeight:300, background:"white", padding:20, position:"relative"}}>

              <input style={{padding:10, width:"110%", marginBottom:10}} type="text" placeholder="Masukkan Email"/>
              
              <div style={{clear:"both"}}/>
              
              <input style={{padding:10, width:"110%", marginBottom:10}} type="text" placeholder="Masukkan Nama"/>
              
              <div style={{clear:"both"}}/>
              
              <textarea rows="6" style={{padding:10, width:"110%"}} placeholder="masukkan pesan"/>
              
              <div style={{clear:"both"}}/>
              
              <div onClick={handleSubmit} style={{height:50, lineHeight:'50px', cursor:"pointer", paddingLeft:80, paddingRight:80, borderRadius:"10px 10px 10px 10px", background:"blue"}}>
                <h4 style={{color:"white"}}>Submit</h4>
              </div>

            </div>
          ))

        }
      </div>
  );
}

export default Chat;
