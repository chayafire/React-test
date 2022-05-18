import React from 'react';
import { Routes, Route } from "react-router-dom";
import Form from './component/form';
import User from './component/user';
import Tabs from './tabs';

export default function App() {
  return (
    <div>
      <Tabs></Tabs>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/form" element={<Form />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}



