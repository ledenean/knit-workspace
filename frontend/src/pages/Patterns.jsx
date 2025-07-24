import { getAllPatterns } from '../api'
import axios from "axios";
import { PatternCard } from '../components/PatternCard';
import { AddPattern } from '../components/AddPattern';
import { Button } from '../components/ui/button'
import { useState, useEffect } from 'react';

export function Patterns() {
    const [patterns, setPatterns] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    useEffect(()=> {
        async function loadAllPatterns(){
            const data = await getAllPatterns();
            setPatterns(data);

        }
        loadAllPatterns();
    }, []);

    return (
        <>
            <Button onClick={() => setShowAddForm(true)}>+</Button>
            {showAddForm && <AddPattern onClose={() => setShowAddForm(false)} />}
            <div className='p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {patterns.map((pattern)=> {
                    return (
                        <PatternCard key={pattern._id} pattern={pattern}/>
                    )
                    
                })}
            </div>   
        </>
    )
}