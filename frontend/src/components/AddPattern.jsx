import { useState, useRef } from "react";
import { createPattern } from '../api'
import { Button } from './ui/button'
import downloadImage from '../assets/download.svg'

export function AddPattern({ onClose }) {
    const [title, setTitle] = useState("");
    const [designer, setDesigner] = useState("");
    const [file, setFile] = useState();

    const MAX_FILE_SIZE = 15000000;

    const inputFile = useRef(null);
    
    async function handleSubmit(e){
        e.preventDefault();
        let submitObject = {
            patternTitle: title,
            patternDesigner: designer,
            pdfFile: file
        }

        await createPattern(submitObject);
        onClose();
    }
    
    function handleFileUpload(e){
        const file = e.target.files[0];
        const fileExtension = file.name.substring(file.name.lastIndexOf("."));
        if (fileExtension != ".pdf") {
            alert ("File must be a pdf");
            inputFile.current.value = "";
            inputFile.current.type = "file";
            return
        }
        if (file.size > MAX_FILE_SIZE) {
            alert ("File size exceeds the limit (15MB)");
            inputFile.current.value = "";
            inputFile.current.type = file;
            return
        }

        setFile(file)
        
    }
    function handleCustomButtonClick(){
        inputFile.current.click();
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center ">
            <div className="bg-background text-foreground p-10 rounded-xl shadow-lg w-full max-w-lg relative">
                <button type="button" onClick={onClose} className="absolute top-2 right-2 text-gray-500 text-lg
                 hover:text-black hover:cursor-pointer">
                    x
                </button>
                <form onSubmit={handleSubmit}>
                <div>
                   <h1 className="block text-left text-xl font-semibold ml-1 mb-4 mt-3">Add Pattern</h1> 
                </div>
                
                <div>
                    <label className="block text-left text-lg mb-1 ml-1">Pattern Title</label>
                    <input className="mt-1 block w-full border rounded-xl bg-input p-2 mb-2" 
                    onChange={(e)=> setTitle(e.target.value)} maxLength={100} required name="title"/>
                </div>
                <div>
                    <label className="block text-left text-lg mb-1 ml-1">Pattern Designer</label>
                    <input className="mt-1 block w-full border rounded-xl bg-input p-2 mb-2"
                    onChange={(e)=> setDesigner(e.target.value)} maxLength={100} required name="designer"/>
                </div>
                {/* <div>
                    <label className="block text-left text-lg mb-1 ml-1">Contents</label>
                    <input onChange={(e)=> setContents(e.target.value)} name="contents"/>    
                </div> */}
                <div>
                    <label className="block text-left text-lg mb-1 ml-1">Upload PDF File</label>
                    <div className="min-h-[23rem] flex flex-col justify-center items-center space-y-4
                    w-full max-w-5xl p-8 bg-input rounded-xl shadow-lg border mb-3"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => handleDrop(e)}
                    >
                        <img src={downloadImage} alt="Upload Icon" className="w-24 h-24 mb-2"/>
                        <p className="text-foreground/70 ">Drag and Drop the files</p>
                        <p className="text-foreground/70 ">or</p>
                        <Button type="button" onClick={handleCustomButtonClick} >Browse Files</Button>
                        <input type="file" className="hidden" onChange={handleFileUpload} ref={inputFile} onClick={(e)=> e.target.value = null} />
                        {/* <input className="mt-1 block w-full border rounded-xl bg-input p-10
                        file:rounded-full "

                        type="file" onChange={handleFileUpload} ref={inputFile} required /> */}
                    </div>
                       
                </div>
                
                <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    )
}