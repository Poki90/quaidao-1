import React from 'react';

const LastSection = () => (
    <div className='last-section'>
        <div className='last-section__title'>Sign up here to receive the latest news and updates of our
            projects!
        </div>
        <div className="container">
            <form className='submit-form' action="">
                <input placeholder='example@gimail.com' className='input' type="text"/>
                <button className='button' type="submit">Submit</button>
            </form>
        </div>
    </div>

);

export default LastSection;
