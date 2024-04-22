import { FileInput, Select, TextInput, Button } from 'flowbite-react'
import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
        <h1 className='text-center text-3xl my-7 font-semibold'>Create Post</h1>
        <form className='flex flex-col gap-4'>
            <div className='flex gap-4'>
                <TextInput type="text" placeholder='Title' required id="title" className='flex-1'/>
                <Select>
                    <option value="uncategorized">Select a Category</option>
                    <option value="personaldevelopment">Personal Development</option>
                    <option value="mindfulnessandmeditation">Mindfulness and Meditation</option>
                    <option value="positivepsychology">Positive Psychology</option>
                    <option value="confidencebuilding">Confidence Building</option>
                    <option value="motivationandinspiration">Motivation and Inspiration</option>
                </Select>
            </div>
            <div className='flex gap-4 items-center border-4 border-teal-500 border-dotted p-3'>
                <FileInput type='file' accept='image/*'/>
                <Button type='button' gradientDuoTone='purpleToBlue' size='sm' outline>Upload Image</Button>
            </div>
            <ReactQuill theme="snow" placeholder='Write your post here...' className='h-72 mb-12' required/>
            <Button type='submit' gradientDuoTone='purpleToPink'>Publish</Button>
        </form>
    </div>
  )
}
