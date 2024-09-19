import BottomBar from '../components/BottomBar'
import editIcon from '../assets/edit_icon.png'
import emptyIcon from '../assets/no_data.png'
import CommentSample from '../components/CommentSample'
import { useNavigate } from 'react-router-dom'

const Comments = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="bg-gradient-to-b from-[#ecfade] to-[#efefef] min-h-screen flex flex-col">
       <header className='h-[16vw] w-full text-[5.333333vw]'>
         <div className='flex justify-between items-center h-[16vw]'>
           <div className='w-1/3'></div>
           <div className='w-1/3 flex justify-center items-center'>Comment</div>
           <div className='w-1/3 flex justify-end items-center pr-[3.8vw]'>
            <img src={editIcon} sizes='6.4vw' className='size-[6.4vw]' onClick={()=>navigate('/postcomment')}/>
           </div>
         </div>
       </header>

       {/* <div className='m-[20vh_0] flex items-center justify-center'>
           <img src={emptyIcon} alt="" />
       </div> */}
       <div>
        <CommentSample/>
       </div>
    </div>
    <BottomBar/>
    </>
  )
}

export default Comments