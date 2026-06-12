import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const message=(content, contentType)=>toast(content, {type:contentType})