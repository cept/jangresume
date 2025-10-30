import React from 'react'
import axios from 'axios';
import ResumeCard from './ResumeCard';
import { useState, useEffect } from 'react';

const ResumeList = () => {
    const [services, setServices] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchResumes = async () => {
        try {
            const response = await axios.get('/api/dashboard');

            setServices(response.data); 
            
            setError(null);
        } catch (err) {
            setError(err.message); 
            setServices([]); 
        } finally {
            setLoading(false); 
        }
        };

        fetchResumes();
    }, []);

    if (loading) {
        return <div>Loading data...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

  return (
    <div className="pt-5">      
        {services.length > 0 ? (
          services.map(service => (
            <ResumeCard key={service.id} service={service} />
          ))
        ) : (
          <p>Belum ada resume yang dibuat.</p>
        )}
    </div>
  )
}

export default ResumeList
