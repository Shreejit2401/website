import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Docs = () => {
    const documents = [
        { name: 'Resume', file: '/documents/resume.pdf' },
        { name: 'CV', file: '/documents/cv.pdf' },
        { name: "Research Paper - 1", file: "/documents/ER.pdf"},
        { name: "Research Paper - 2", file: "/documents/StegaCraft.pdf"},
        { name: "Founder's Office Intern @ Trainity", file: '/documents/Trainity.pdf' },
        { name: 'AI & ML Intern @ PerspectAI', file: '/documents/PerspectAI.pdf' },
        { name: "ServiceNow Certified System Administrator", file: "/documents/CSA.pdf" },
        { name: "ServiceNow Certified Application Developer", file: "/documents/CAD.pdf" },
        { name: "Google Data Analytics", file: "/documents/GDA.pdf" },
        { name: "Azure AI Fundamentals", file: "/documents/MSAI.pdf"},
        { name: "Azure Data Fundaments", file: "/documents/MSData.pdf"},
        { name: "AWS Machine Learning Foundations", file: "/documents/AWSML.pdf"},
        { name: "AWS Data Analytics", file: "/documents/AWSDA.pdf"},
        { name: "ML using Python @ Datacamp", file: "/documents/MLDatacamp.pdf" }
    ];

    const [selectedDoc, setSelectedDoc] = useState(documents[0].file);
    const [loading, setLoading] = useState(true);
    const [letterClass, setLetterClass] = useState('text-animate');

    const handleButtonClick = (file) => {
        setSelectedDoc(file);
        setLoading(true);
    };

    useEffect(() => {
        const iframe = document.querySelector('iframe');
        iframe.onload = () => setLoading(false);
    }, [selectedDoc]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className="container docs-container">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['M', 'y', ' ', ' ', ' ', 'D', 'o', 'c', 'u', 'm', 'e', 'n', 't', 's']}
                            idx={15}
                        />
                    </h1>
                </div>
                {loading && <Loader type="pacman" />}
                <div className="docs-buttons">
                    {documents.map((doc, index) => (
                        <button 
                            key={index}
                            className="flat-button"
                            onClick={() => handleButtonClick(doc.file)}
                        >
                            {doc.name}
                        </button>
                    ))}
                </div>
                <iframe src={selectedDoc} title="Document Viewer" className="doc-viewer" />
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Docs;
