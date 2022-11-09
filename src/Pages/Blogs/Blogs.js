import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs');
    return (
        <div className='my-10 w-full'>
            <div className="card my-5 bg-slate-400 hover:bg-slate-300 shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-4">1. Difference between SQL and NoSQL</h2>
                    <ol className='text-xl'>
                        <li>-- Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes.</li>
                        <li>-- SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships. NoSQL databases need not stick to this format, but generally fit into one of four broad categories: Column-oriented, Key-Value, Document, Graph.</li>
                        <li>-- SQL databases represent massive communities, stable code bases, and proven standards. NoSQL technologies are being adopted quickly, but communities remain smaller and more fractured.</li>          
                    </ol>
                </div>
            </div>
            <div className="card my-5 bg-slate-400 hover:bg-slate-300 shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-4">2. What is JWT, and how does it work?</h2>
                    <p className='text-xl'>-- JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). <br />
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted</p>
                </div>
            </div>
            <div className="card my-5 bg-slate-400 hover:bg-slate-300 shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-4">3. What is the difference between javascript and NodeJS?</h2>
                    <p className='text-xl'>-- JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                </div>
            </div>
            <div className="card my-5 bg-slate-400 hover:bg-slate-300 shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-4">4. How does NodeJS handle multiple requests at the same time?</h2>
                    <p className='text-xl'>-- NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;