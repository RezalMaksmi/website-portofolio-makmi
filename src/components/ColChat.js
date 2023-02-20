import './ColChat.css';
import axios from 'axios';

import React, { Component } from 'react';
import IsiChat from './IsiChat';
const openmedsos = (e) => {
    const medsos = document.querySelector('#medsos');
        // console.log(e)
        // e.target.classList.add("btn-hover")
        // medsos.classList.add("medsos-add")
        medsos.classList.toggle("tampil")
        
    }
class ColChat extends Component {
    state = {
        post: [],
        formBlogPost: {
            // ini adalah tempat menyimpan block kontent
            userId: 1,
            id : 1,
            body:'',
            name:'noname'
        }
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((res) => {
        console.log(res)
        this.setState({
            post: res.data
        })
      })
    }

    componentDidMount(){
        this.getPostAPI()   
         
    }
    // masukkanNama = () =>{
    //     this.nama = prompt("Please enter your name:", "Harry Potter");

    // }
    handleFormChange = (event) => {
        
            //membuat id yang unix dengan menggunakan waktu
            // console.log(event.target.value)
        let timestamp = new Date().getTime();
        
        // membuat blogpostnew yang berisikan formblogpost lama
        let formBlogPostNew = {...this.state.formBlogPost}
        // console.log(event.target.name)
        
        // masukkan timestamp yang berisikan waktu random kedalam formblogpost
        formBlogPostNew['id'] = timestamp
        
        // masukkan event dengan target dan value yang ditulis di form yang kemudian dimasukkan ke formblogpostnew
        formBlogPostNew[event.target.name] = event.target.value 
        // formBlogPostNew[] = event.target.value 
        
        
        this.setState({
            // kemudian disini akan merubah
            formBlogPost: formBlogPostNew
        })
        

    }
  

    handleTambah = () => {
        
        // console.log(this.nama)
        axios.post(`http://localhost:3004/posts`, this.state.formBlogPost).then((res)=> {
        // console.log(res)

        // console.log(this.state.formBlogPost)
        alert("Data Berhasil Ditambahkan")
        window.location.reload() 
        this.getPostAPI() 
        }, (err) => {
            console.log('error', err)
        })
    }

    handleSubmit = () => {
        
        this.handleTambah()
        this.getPostAPI()   
          
            // console.log(res)
            // setStatus(true);
    }
    
    render() {
        return(
        <main className='main-chat'>
            <div className='wrapping-chat'>
                <div className='chat'>
                    {
                        // berfungsi untuk melooping data yang ada di API
                        this.state.post.map(post => {
                            return <IsiChat data={post} />
                        })
                    }
                </div>
                
                
                <div className='wrap-input'>
                
                                     
                    <input type="text" name='body' id='body' placeholder='Tulis pesan...' onChange={this.handleFormChange}/>
                    <button className='btn-kirim' onClick={this.handleSubmit} type='submit' >Kirim</button>
                </div>
            </div>
            <div className='bungkus'>
                    <div className='wrap-input-name'>
                        <div className='btn-name' onClick={openmedsos}>></div>
                        <div className='medsos-add1' id='medsos'>
                            <input type="text" name='name' id='name' placeholder='Masukkan Nama anda' onChange={this.handleFormChange}/>
                        </div>
                    </div> 
                </div>
        </main>
    )}
    
}

export default ColChat;