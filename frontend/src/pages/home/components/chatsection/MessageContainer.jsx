import React from 'react'
import ChatHeader from './ChatHeader'
import ChatMssgs from './ChatMssgs'
import ChatInput from './ChatInput'
import NoUserSelected from './NoUserSelected'

function MessageContainer() {

  let var1 = true
  return (
    <>

      {var1 ? <> <NoUserSelected />  </> : <>

        <div className='border h-[400px] w-[450px] '>


          <ChatHeader />
          <div className='divider my-0 py-0 h-1'></div>

          <ChatMssgs />



          <div className='divider my-0 py-0 h-1'></div>
          <ChatInput />

        </div>


      </>}






    </>
  )
}

export default MessageContainer