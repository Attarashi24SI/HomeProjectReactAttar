export default BiodataDiri;

function BiodataDiri() {
    const propsKontak = {
        email: "attarashi@gmailcom",
        nomorHP: "081234567890"
    };
    return (
        <div className="card">
            <FotoProfil />
            <Nama />
            <Kontak {...propsKontak}/>
            <Prodi />
            <Skill />
            <Pengalaman />
        </div>
    );
}


function FotoProfil() {
    return (
        <>
            <img
                src="img/customimage.jpg"
                alt="Foto Profil"
            />
            <hr />
        </>
    );
}

function Nama() {
    return (
        <>
            <h1>Attarashi Tomodachi Surya</h1>
            <hr />
        </>
    );
}

function Kontak(props) {
    return (
        <>
            <p>Email: {props.email}</p>
            <p>No HP: {props.nomorHP}</p>
            <hr />
        </>
    );
}

function Prodi() {
    return (
        <>
            <p>Program Studi : Sistem Informasi</p>
            <hr />
        </>
    );
}

function Skill() {
    return (
        <>
            <p>Skill: React, JavaScript, CSS</p>
            <hr />
        </>
    );
}

function Pengalaman() {
    return (
        <>
            <p>Pengalaman: Frontend Developer Intern</p>
            <small>Terima kasih telah melihat portofolio saya</small>
        </>
    );
}




