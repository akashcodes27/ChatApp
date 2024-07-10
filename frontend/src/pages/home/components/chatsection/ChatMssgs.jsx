import React from 'react'

function ChatMssgs() {
  return (
    <div className="flex flex-col p-4 space-y-4 overflow-y-auto h-80 bg-gray-100">
      <div className="chat chat-start">
        <div className="chat-bubble">Hi there!</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">Hello! How can I help you?</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">I have a question about my order.</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">Sure, what's your order number?</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">My order number is 758385853.</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">Okay, Mr.Peter I have found your order, Whats your query?</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">I placed this order on 5th of June, and it has been 10 days since then, I have not received my product, how can we fix this?</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">Okay, Mr.Peter, let me quickly check the status of your order</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">I am sorry Mr.Peter as there has been a shipment delay due to transportation related problems in transit, I will immediately communicate your concern to the warehouse executive on an urgent basis</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">Alright, please ensure that I get my product in the next 2 days </div>
      </div>
    </div>
  )
}

export default ChatMssgs



// overflow-auto ensures that if there are too many mssgs, then we can scroll 