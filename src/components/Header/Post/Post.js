import React from "react";
import { Routes, Route } from 'react-router-dom';
import View from '../Post/View/View';
import List from '../Post/List/List';
import { useState } from "react";
import Comment from '../Post/Comment/Comment';
function Post() {
  const [viewdata, setViewData] = useState('');
  const getViewData = (data) => {
    console.log(data)
    setViewData(data)
  }

  return (
    <>
      <Routes>
        <Route exact path="/list" element={<List getViewData={getViewData} />} />
        <Route exact path={`/view/${viewdata.id}`} element={<View viewdata={viewdata} />} />
        <Route exact path={`/comment/${viewdata.id}`} element={<Comment viewdata={viewdata} />} />
        <Route path="*" element={<List getViewData={getViewData} />} />
      </Routes>
    </>
  )
}
export default Post;
