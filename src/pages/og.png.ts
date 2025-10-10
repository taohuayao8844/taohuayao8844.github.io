import type { APIRoute } from 'astro';
import { siteOpenGraph } from '~/utils/openGraphImage';

export const GET: APIRoute = async () => {
    // 1. 获取 Buffer 数据
    const imageBuffer = await siteOpenGraph();
    
    // 2. ✅ 使用类型断言 as ArrayBuffer
    // 这告诉 TypeScript 编译器，虽然它是一个 Buffer，但它可以被当做 ArrayBuffer 使用
    const body = imageBuffer as ArrayBuffer; 

    return new Response(body, {
        headers: { 
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=31536000, immutable',
        },
    });
};