import React, { useEffect, useState } from 'react'
import './App.css';
import Table from './table.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Select from 'react-select'

const axios = require('axios').default;
const url = 'http://localhost:3001';

function App() {

  const [data, setData] = useState([]);
  const [enableInsert, setEnableInsert] = useState(false);
  const [enableModify, setEnableModify] = useState(false);
  const [enableDelete, setEnableDelete] = useState(false);
  const [enableGetSpecific, setEnableGetSpecific] = useState(false);
  const [author, setAuthor] = useState('');
  const [propertyValue, setPropertyValue] = useState('');
  const [propertyToChange, setPropertyToChange] = useState('');
  const [booksId, setBooksId] = useState('');
  const [title, setTitle] = useState('');
  const [renderAll, setRenderAll] = useState(false);
  const options = [
    { value: 'title', label: 'Title' },
    { value: 'author', label: 'Author' }
  ]
  const columns = React.useMemo(
    () => [
      {
        Header: 'Ale Bookstore',
        columns: [
          {
            Header: 'id',
            accessor: 'id',
          },
          {
            Header: 'Title',
            accessor: 'title',
          },
          {
            Header: 'Author',
            accessor: 'author',
          },
        ]
      }
    ],
    []
  )

  useEffect(() => {
    getInitialData();
  }, []);

  const getInitialData = () => {
    axios.get(url + '/books')
    .then((data) => {
      // handling success
      setData(data.data) //consume data from endpoint
      setEnableGetSpecific(false)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  
  const getBookById = (id) => { //if id not provided, will retrieve the first book
    axios.get(url + '/books/' + id)
    .then((response) => {
      // handling success
      const newData = [];
      newData.push(response.data);
      setData(newData)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  
  const insertData = () => {
    const newBook = {
      author: author,
      title: title
    }
    axios.post(url + '/books', newBook)
    .then(() => {
      // handle error
      getInitialData()
      setEnableInsert(false)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  
  const modifyData = (id) => {
    const modifiedData = {};
    modifiedData[propertyToChange] = propertyValue
    axios.patch(url + '/books/' + id, modifiedData)
    .then(() => {
      // handling success
      getInitialData()
      setEnableModify(false)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  
  const deleteData = (id) => {
    axios.delete(url + '/books/' + id)
    .then(() => {
      // handling success
      getInitialData()
      setEnableDelete(false)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }


  return (
    <div className="App">
      <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
        <Table columns={columns} data={data}></Table>
        
      </div>
      <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
      <Button style={{marginRight: '10px', marginLeft: '10px'}} className="col-lg-2 col-md-2 col-sm-2 col-xs-2"  onClick={() => setEnableInsert(true)}> Add Book </Button>
        <Button style={{marginRight: '10px', marginLeft: '10px'}} className="col-lg-2 col-md-2 col-sm-2 col-xs-2"  onClick={() => setEnableDelete(true)}> Delete Specific Book </Button>
        <Button style={{marginRight: '10px', marginLeft: '10px'}} className="col-lg-2 col-md-2 col-sm-2 col-xs-2"  onClick={() => setEnableModify(true)}> Modify Book's property </Button>
        <Button style={{marginRight: '10px', marginLeft: '10px'}} className="col-lg-2 col-md-2 col-sm-2 col-xs-2"  onClick={() => setEnableGetSpecific(true)}> Get Specific Book </Button>  
      </div>
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" style={{marginTop: '30px', marginLeft: '100px'}}>
        {enableInsert ? 
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <label>
              Author:&nbsp;&nbsp;&nbsp;
              <input type="text" name="author" onChange={(e) => setAuthor(e.target.value)}/>
            </label>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <label>
              Title:&nbsp;&nbsp;&nbsp;
              <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
            </label>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <Button style={{marginRight: '10px', marginLeft: '10px'}} className="col-lg-6 col-md-6 col-sm-6 col-xs-6"  onClick={() => insertData()}> Add </Button>
            </div>
          </div>
        : null }

        {enableModify ? 
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <label> Books's id: &nbsp;&nbsp;&nbsp;</label>
              <input type="text" name="title" onChange={(e) => setBooksId(e.target.value)} />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{marginTop: '20px'}}>
              <label> Property to modify:&nbsp;&nbsp;&nbsp;</label>
              <Select options={options} onChange={(e) => setPropertyToChange(e.value)} />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{marginTop: '20px'}}>
              <label> Value: &nbsp;&nbsp;&nbsp;</label>
              <input type="text" name="title" onChange={(e) => setPropertyValue(e.target.value)} />
            </div>
            <Button style={{marginRight: '10px', marginLeft: '10px'}} className="col-lg-6 col-md-6 col-sm-6 col-xs-6"  onClick={() => modifyData(booksId)}> Modify Book </Button>
          </div>
        : null }

        {enableDelete ? 
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <label>
                Id:&nbsp;&nbsp;&nbsp;
                <input type="text" name="author" onChange={(e) => setBooksId(e.target.value)}/>
              </label>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{marginTop: '20px'}}>
              <Button style={{marginRight: '10px', marginLeft: '10px'}} className="col-lg-6 col-md-6 col-sm-6 col-xs-6"  onClick={() => deleteData(booksId)}> Delete Book </Button>
            </div>
          </div>
        : null }

        {enableGetSpecific ? 
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <label>
                Book's id:&nbsp;&nbsp;&nbsp;
                <input type="text" name="author" onChange={(e) => setBooksId(e.target.value)} />
              </label>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{marginTop: '20px'}}>
              <Button style={{marginRight: '10px', marginLeft: '10px'}} className="col-lg-6 col-md-6 col-sm-6 col-xs-6"  onClick={() => getBookById(booksId)}> Get Specific Book </Button>  
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <label>
                Restablish all data and close filter:&nbsp;&nbsp;&nbsp;
                <input type="checkbox" checked={renderAll} name="author" onChange={() => getInitialData()} />
              </label>
            </div>
          </div>
        : null }
        
      </div>
      
    </div>
  );
}

export default App;
