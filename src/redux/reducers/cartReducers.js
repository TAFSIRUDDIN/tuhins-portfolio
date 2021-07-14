import { ADD_TO_CART } from "../actions/cartActions";
import { REMOVE_FROM_CART } from "../actions/cartActions";

import image1 from '../../images/Powerpointdesign1.png';
import image2 from '../../images/Powerpointdesign2.png';
import image3 from '../../images/Powerpointdesign3.png';
import image4 from '../../images/Powerpointdesign4.png';
import image5 from '../../images/Powerpointdesign5.png';
import image6 from '../../images/Powerpointdesign6.png';
import image7 from '../../images/Powerpointdesign7.png';
import image8 from '../../images/Powerpointdesign8.png';
import image9 from '../../images/Powerpointdesign9.png';
import image10 from '../../images/Powerpointdesign10.png';
import manavatar from './../../images/manavatar.jpg'
import womanavatar from './../../images/womanavatar.jpg'

const initialState ={
    cart: [],
    works: [
        {
            name : 'Shirley topu',
            worklink : 'https://onedrive.live.com/embed?cid=78EB258DD3472717&resid=78EB258DD3472717%214692&authkey=AOufGVo8WiySbm8&em=2',
            image: image1
            
        },
        {
            name : 'Shirley topu',
            worklink : 'https://onedrive.live.com/embed?cid=78EB258DD3472717&resid=78EB258DD3472717%214698&authkey=AI8fGc-SWCh-YQs&em=2',
            image: image2
            
        },
        {
            name : 'Shirley topu',
            worklink : 'https://onedrive.live.com/embed?cid=78EB258DD3472717&resid=78EB258DD3472717%214694&authkey=AAmea-5L4H5-RQo&em=2',
            image: image3
            
        },
        
        {
            name : 'Shirley topu',
            worklink : 'https://onedrive.live.com/embed?cid=78EB258DD3472717&resid=78EB258DD3472717%214700&authkey=AEx0ZEqgI2FJ_Ag&em=2',
            image: image4
            
        },
        {
            name : 'Shirley topu',
            worklink : 'https://onedrive.live.com/embed?cid=78EB258DD3472717&resid=78EB258DD3472717%214701&authkey=AEkYj_ZWUaaHJJc&em=2',
            image: image5
            
        },
        {
            name : 'Shirley topu',
            worklink : 'https://onedrive.live.com/embed?cid=78EB258DD3472717&resid=78EB258DD3472717%214696&authkey=ABytbnpaJi6Ijj8&em=2',
            image: image6
            
        },
        {
            name : 'Shirley topu',
            worklink : 'https://onedrive.live.com/embed?cid=78EB258DD3472717&resid=78EB258DD3472717%214703&authkey=AKOSBQD1as1vr7A&em=2',
            image: image7
            
        },
        {
            name : 'Shirley topu',
            worklink : 'https://onedrive.live.com/embed?cid=78EB258DD3472717&resid=78EB258DD3472717%214705&authkey=AHfFUoAxsRYslqA&em=2',
            image: image9
            
        },
        {
            name : 'Shirley topu',
            worklink : 'https://onedrive.live.com/embed?cid=78EB258DD3472717&resid=78EB258DD3472717%214708&authkey=AB7wB-S87itvBPU&em=2',
            image: image10
            
        },
        {
            name : 'Shirley topu',
            worklink : 'https://onedrive.live.com/embed?cid=78EB258DD3472717&resid=78EB258DD3472717%214709&authkey=AFH9vFavzn5AvUE&em=2',
            image: image8
            
        }
    ],
    reviews: [
        {
            name : 'Christine Marie',
            position: 'CEO',
            message : 'I have been using Rayhan for all of my presentation slides. He is Responsive, has excellent communication skills and completes assignments quickly. I highly recommend him.',
            image: womanavatar
            
        },
        {
            name : 'Paul Burke',
            position: 'Marketing Manager',
            message : 'I am extremely happy with Rayhan and his work. His communication is clear and precise. He was extremely responsive and got the job done quickly. I highly recommend him and will look forward to working with him in the future.',
            image: manavatar
            
        },
        {
            name : 'Jasmin Ahmed',
            position: 'Doctor',
            message : 'There are many skilled people on the this market place site but often communication and delivery can take a considerable amount of one’s time to receive a final product. Rayhan was definitely the exception to this common problem. He was articulate, precise and delivered a high-class result with no extra effort from myself. He truly made the whole experience a pleasure. Thank you Rayhan, 110% Recommendation. I look forward to working with you again soon',
            image: womanavatar
            
        },
        {
            name : 'David Pultorak',
            position: 'Author',
            message : 'Outstanding experience ! You can trust M. Rayhan Shahariar : he will be a great asset for any of your projects. I will work with him again.',
            image: manavatar
            
        }

    ]
}
const cartReducers =(state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newId = action.id;
            const newCart = [...state.cart, newId];
            return {
                cart: newCart
            };
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item !== id);
            return {
                cart: remainingCart
            }
        default:
            return state;
    }
}
export default cartReducers;