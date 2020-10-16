import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ServiceCard = ({ service }) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const cardStyle = {
        textAlign: "center",
        borderRadius: 10,
        border: 'none',
        transition: 'box-shadow .3s ease',
        background: 'transparent'
    }
    return (
        <animated.div
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
        >
            <Link to={`/dashboard/${service._id}#order`} className='text-dark text-decoration-none'>
                <div className="col mb-4">
                    <div className="card d-flex flex-column align-items-center py-4 service" style={cardStyle}>
                        <img src={`data:image/png;base64,${service.image.img}`} style={{ width: 74 }} className="card-img-top mt-4" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{service.title}</h5>
                            <p className="card-text">{service.desc}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </animated.div>

    );
};

export default ServiceCard;