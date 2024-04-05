import React from 'react'

const RequestFormPage = () => {
  return (
    // className="flex my-0 mx-auto py-0 relative top-[107px]"
    <div className="relative top-[107px] h-[calc(100vh-107px)] flex items-center">
      <form className="px-4 py-4 mx-auto w-full max-w-[500px] flex flex-col gap-4">
        <input className='bg-transparent border-b-2 w-full h-[40px]' type='text' placeholder="Name" ></input>
        <input className='bg-transparent border-b-2 w-full h-[40px]' type='email' placeholder="Email" ></input>
        <input className='bg-transparent border-b-2 w-full h-[40px]' type='text' placeholder="Phone" ></input>
        <input className='bg-transparent border-b-2 w-full h-[40px]' type='text' placeholder="Organization" ></input>
        <textarea className='appearance-none bg-transparent  border-b-2 w-full h-[100px]' type='textarea' placeholder="Message" ></textarea>
        <input className="border-2 w-max px-6 py-3 rounded-md border-[#0B6CB4] text-[#0B6CB4]" type="submit" value="Send"></input>
      </form>
    </div>
  )
}

export default RequestFormPage