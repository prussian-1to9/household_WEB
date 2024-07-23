// src/config/cors.ts
// 해당 CORS 옵션은 전역적으로 적용됩니다.
import cors from 'cors';

// 통신 허용 url
// to test : add origin 'http://localhost' to request header 
const whiteList = [
    'http://localhost', 'http://127.0.0.1',
];
const corsOptions: cors.CorsOptions = {
    origin: (origin, callback) => {
        // 유효하지 않을 경우
        if (!origin || whiteList.indexOf(origin) !== -1) {
        callback(null, true);
        } else {
        callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}

export default corsOptions;
