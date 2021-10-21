import React from 'react';

const Feature = (props) => {
    //console.log(props.feature);
    const { description, value } = props.feature;
    return (
        <div>
            <ul>
                <li><small>{description}: {value}</small></li>
            </ul>

        </div>
    );
};

export default Feature;


const student =
    [
        { name: "Mohammad Muzahid", img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3R1ZGVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", id: 1, _class: "five", ScholarshipAmount: 5000, attendanceMarksOutOf5: 5, weight: 60 },

        { name: "A.K.M Jabbar", img: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0dWRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", id: 2, _class: "Six", ScholarshipAmount: 4200, attendanceMarksOutOf5: 4, weight: 55 },

        { name: "Maliha Sultana", img: "https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", id: 3, _class: "Nine", ScholarshipAmount: 3900, attendanceMarksOutOf5: 2, weight: 66 },

        { name: "Sokina Khatun", img: "https://images.unsplash.com/photo-1517842536804-bf6629e2c291?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHN0dWRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", id: 4, _class: "SSC Candidate", ScholarshipAmount: 900, attendanceMarksOutOf5: 3, weight: 45 },

        { name: "Zorina Begom", img: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0dWRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", id: 5, _class: "Honors 1st", ScholarshipAmount: 2555, attendanceMarksOutOf5: 5, weight: 75 },

        { name: "Mizanur Rahman", img: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN0dWRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", id: 6, _class: "BSC 2nd", ScholarshipAmount: 1200, attendanceMarksOutOf5: 1, weight: 77 },

        { name: "Tabassum Jahan", img: "https://media.istockphoto.com/photos/young-african-american-student-girl-using-laptop-sitting-on-the-table-picture-id1288615417?b=1&k=20&m=1288615417&s=170667a&w=0&h=R2bF71T67HOvJJHY8ipoS1u5yQ_qQXIIOYkNd2ReOgw=", id: 7, _class: "Eight", ScholarshipAmount: 4250, attendanceMarksOutOf5: 2, weight: 72 },

        { name: "Nusrat Rina", img: "https://media.istockphoto.com/photos/young-afro-american-woman-on-yellow-copy-space-background-picture-id1278445184?b=1&k=20&m=1278445184&s=170667a&w=0&h=eCfydQoiIUzsch3n3oNLtpHp1JeyZoKBcy7igBWaPc0=", id: 8, _class: "Two", ScholarshipAmount: 6950, attendanceMarksOutOf5: 5, weight: 66 },

        { name: "Khalid Bin Tariq", img: "https://media.istockphoto.com/photos/asian-chinese-teenage-boy-listening-to-music-with-bluetooth-earphone-picture-id1271439296?b=1&k=20&m=1271439296&s=170667a&w=0&h=ZOuIfPUR26TSuOWb4PjnN2azJl6BEWxLjRuE87ZTG38=", id: 9, _class: "Seven", ScholarshipAmount: 5520, attendanceMarksOutOf5: 3, weight: 56 },

    ]