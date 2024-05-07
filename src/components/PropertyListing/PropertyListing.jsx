import React, { useState, useEffect } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import { fetchWrapper } from '../../utils';

const PropertyListing = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        async function fetchProperties() {
            const properties = await fetchWrapper('/properties');
            setProperties(properties);
        }
        fetchProperties();
    }, []);

    return (
        <ul className="PropertyListing">
            {properties.map((property) => (
                <li key={property.id}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;
