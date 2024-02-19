
import React from 'react';

function Card() {
    return (
        <div class="mx-auto max-w-md overflow-hidden rounded bg-white shadow-lg">
           
            <div class="px-6 py-4">
                <div class="text-black mb-2 text-xl font-bold">
                    Welcome to 11.AI Class!
                    <p class="pt-4 text-base text-gray-700">This is a part of the WEB202 course.</p>
                </div>
            </div>
            <div class="px-6 pb-4 pt-4">
                <button class="rounded-md bg-blue-600 px-4  text-white">Learn more</button>
            </div>
        </div>
    );
}

export default Card;