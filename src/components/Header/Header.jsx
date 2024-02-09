import './Header.css';
import '../CustomButton/CustomButton';
import CustomButton from '../CustomButton/CustomButton';
import { useState } from 'react';
import InfoBox from './../InfoBox/InfoBox';
import Modal from '../Modal/Modal';
/**
 * Componens olusturma kurallari
 * Her react componenti javascript fonskiyonudur
 * Adi buyuk harfle baslayan bir javascript fonksiyonu olustur
 * Fonksiyonun içerisinde ekranda olamsiniistedigin bir jsx kodlarini return içerisinde
 * son olarsk olsuturdugun componenti export et
 */

const Header = ({ aktifKullaniciSayisi, setAktifKullanici }) => {

    // const [kullaniciVarMi, setKullaniciVarMi] = useState();
    const [basilanButon, setBasilanButon] = useState(null);
    const [modalGoster, setModalGoster] = useState();

    const menuIsimleri = ['Ana Sayfa', 'Hakkimizda', 'Urunleirimiz', 'Iletisim'];
    return (
        <header className="header">
            <div className="header-logo">Logo</div>
            <nav className="navbar">
                {menuIsimleri.map((menuIsmi) => (
                    <a>{menuIsmi}</a>
                ))}
                {/* <a href="">Ana Sayfa</a>
                <a href="">Hakkimizda</a>
                <a href="">Urunlerimiz</a>
                <a href="">Iletisim</a> */}
            </nav>

            <div className="header-right">

                {basilanButon ? (
                    <CustomButton
                        buttonTitle={`${basilanButon} Olarak Çikis Yap`}
                        buttonColor={'red'}
                        onClick={() => {
                            if (basilanButon === 'Kullanici') {
                                setAktifKullanici(aktifKullaniciSayisi - 1)
                            }
                            setBasilanButon(null)
                        }} />
                ) : (
                    <>
                        <CustomButton
                            onClick={() => {
                                setAktifKullanici(aktifKullaniciSayisi + 1)
                                setBasilanButon('Kullanici')
                            }}
                            buttonTitle={'Kullanici Girisi'}
                            buttonColor={'cadetblue'}
                        />
                        <CustomButton
                            onClick={() => {
                                setBasilanButon('Admin')
                            }}
                            buttonTitle={'Admin Girisi'}
                            buttonColor={'orange'}
                        />
                        <CustomButton onClick={() => setModalGoster(true)} buttonTitle={'Kayit Ol'} buttonColor={'green'} />
                    </>
                )}
                {basilanButon === 'Admin' && (<InfoBox infoMetin={'Aktif Kullanici Sayisi'}
                    infoDeger={aktifKullaniciSayisi} />)}

                {basilanButon === 'Kullanici' && <InfoBox infoMetin={'Sizinle Birlikte Kullanici Sayisi'} infoDeger={aktifKullaniciSayisi} />}
            </div>

            {modalGoster === true && (<Modal setModalGoster={setModalGoster} />)}
        </header>
    );
};

export default Header;

// export {Header}