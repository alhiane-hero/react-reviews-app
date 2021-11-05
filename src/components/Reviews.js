import {useState} from 'react';
import people from './Data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function Reviews() {

    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];

    const checkIndex = index => {
        if (index > people.length - 1) {
            return 0;
        }
        if (index < 0) {
            return people.length - 1;
        }
        return index;
    }

    const nextPerson = _ => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkIndex(newIndex);
        });
    }

    const prevPerson = _ => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkIndex(newIndex);
        });
    }

    const randomPerson = _ => {
        let randomIndex = Math.floor(Math.random() * people.length);
        if (randomIndex === index) {
            randomIndex = index + 1;
        }
        setIndex(checkIndex(randomIndex));
        console.log(randomIndex);
    }

    return (
        <div className="Review">
            <div className='Head'>
                <img className='ImgFluid' src={image} alt={name} />
                <span className='QuoteIcon'>
                    <FaQuoteRight />
                </span>
            </div>
            <div className='Body'>
                <h4 className='Name'>{name}</h4>
                <h4 className='Job'>{job}</h4>
                <p className='Desc'>{text}</p>
            </div>
            <div className='Footer'>
                <div className='Chevrons'>
                    <button className='Btn' onClick={prevPerson}>
                        <FaChevronLeft />
                    </button>
                    <button className='Btn' onClick={nextPerson}>
                        <FaChevronRight />
                    </button>
                </div>
                <div className='randomBtn'>
                    <button className='Btn' onClick={randomPerson}>
                        Surprise Me
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
