import './Card.css';

export default function Card({ personInfo }) {

    const { userPhoto, firstName, lastName, userMail, userGender } = personInfo;

    const cardStyle = {
        backgroundColor:
            userGender === 'Female'
                ? 'pink'
                : userGender === 'Male'
                ? 'blue'
                : 'orangered',
    };

    return (
        <div className="card" style={cardStyle}>
            <img
                src={userPhoto} alt=""
            />

            <div>
                <h5>{firstName + ' ' + lastName}</h5>
                <p>{userMail}</p>
                <p>{userGender}</p>
            </div>
        </div>
    );
};