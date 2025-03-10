import React from 'react';
import Layout from '../Components/Layout';

const Homepages = () => {
    return (
       <Layout>
        <div className='bg-red-500  py-20 pl-3 pr-20 h-screen md:px-20 md:pr-3'>
            <p className='bg-yellow-500 h-4/5 flex flex-col items-center justify-center
        border'>This is home page.</p>
        </div>
       </Layout>
    );
};

export default Homepages;