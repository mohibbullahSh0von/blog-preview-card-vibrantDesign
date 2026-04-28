
import {PreviewCard} from '../../index'
import {image, status, date, title, description, profile} from '../../sampleData.json'


function home() {
  return (
    
    <div className='font-figtree bg-light-yellow min-h-screen flex justify-center items-center'>
        <PreviewCard heroImg={image} 
                    status={status} 
                    date={date}
                    title={title}
                    description={description}
                    avatar={profile.avatar}
                    author={profile.author} 
                    />
    </div>
  )
}

export default home