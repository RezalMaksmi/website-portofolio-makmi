import './Main.css';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import Item from './Item';
import fb from '../img/fb.png'
import ig from '../img/ig.png'
import yt from '../img/yt.png'
import twt from '../img/twt.png'


const openmedsos = (e) => {
const medsos = document.querySelector('#medsos');
    // console.log(e)
    // e.target.classList.add("btn-hover")
    // medsos.classList.add("medsos-add")
    medsos.classList.toggle("tampil")
    
}

const Main = () => {
    return(
        <main className="main-content">
            <div className="wrap-main-txt">
                <h6>Tentang Saya</h6>
                <p>Saya adalah seorang mahasiswa disalah satu universitas swasta dimalang, saya membangun website portofolio ini dengan tujuan mendokumentasikan hasil dari project kecil-kecilan saya.</p>
            </div>
            <div className="wrap-main-txt">
                <h6>Pendidikan</h6>
                <p>SDN Tapakrejo 01</p>
                <p>MTSN 5 Blitar</p>
                <p>SMKS Pemuda 1</p>
                <p>OTW S.Kom</p>
            </div>
            <div className='wrapping-skil'>
                <div className='wrap-skil'>
                    <h6>Skill Saya</h6>
                    <div className='wrap-range'>
                        <p className='name-range'>HTML</p>
                        <div className='range'><div className='range-value'></div></div>
                    </div>
                    <div className='wrap-range'>
                        <p className='name-range'>CSS</p>
                        <div className='range'><div className='range-value'></div></div>
                    </div>
                    <div className='wrap-range'>
                        <p className='name-range'>JS</p>
                        <div className='range'><div className='range-value'></div></div>
                    </div>
                </div>
                <div className='wrap-skil'>
                    <h6>Skill Saya</h6>
                    <div className='wrap-range'>
                        <p className='name-range'>HTML</p>
                        <div className='range'><div className='range-value'></div></div>
                    </div>
                    <div className='wrap-range'>
                        <p className='name-range'>CSS</p>
                        <div className='range'><div className='range-value'></div></div>
                    </div>
                    <div className='wrap-range'>
                        <p className='name-range'>JS</p>
                        <div className='range'><div className='range-value'></div></div>
                    </div>
                </div>
            </div>
            <div className='wrapping-project'>
                <h6>Project Saya</h6>
                <div className='wrap-project'>
                    <p className='p-text'>Berikut ini adalah Project-projectc frontend/slacing yang pernah saya kerjakan.</p>
                </div>
                <ScrollingCarousel className='items-project' show={3.5} slide={3} swiping={true}>
                
                    <Item judul="MBKM UNIKAMA" deskripsi="Merupakan Website monitoring dikampus UNIKAMA." />
                    <Item judul="Belanja Mudah" deskripsi="Merupakan project UAS saya dibuat dengan CRUD Sederhana." />
                    <Item judul="Beritanejowo" deskripsi="Merupakan blog content yang saya bangun tujuan untuk informasi." />   
             
                </ScrollingCarousel>
            </div>
           
                <div className='wrap-medsos'>
                    <div className='btn' onClick={openmedsos}>=</div>
                    <div className='medsos-add' id='medsos'>
                        <a href=''><img src={ig} className="img" alt="dumy" /></a>
                        <a href=''><img src={yt} className="img" alt="dumy" /></a>
                        <a href=''><img src={fb} className="img" alt="dumy" /></a>
                        <a href=''><img src={twt} className="img" alt="dumy" /></a>
                    </div>
                </div>
            
        </main>
    )
}

export default Main;