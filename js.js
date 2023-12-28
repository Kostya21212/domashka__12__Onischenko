const pic = [
    '<img src="./images/1_Harry.jpg" width=600 alt="">',
    '<img src="./images/2_Germiona.jpg" width=600 alt="">',
    '<img src="images/3_Ron.png" width=600 alt="">',
    '<img src="./images/4_Dambldor.jpg" width=600 alt="">',
    '<img src="./images/6_Harry_young_3.jpg" width=600 alt="">',
    '<img src="./images/7_dementors.jpg" width=600 alt="">',
    '<img src="././images/8_dementors.jpg" width=600 alt="">',
    '<img src="./images/9_Harry_young.jpg" width=600 alt="">',
    '<img src="./images/Merry Christmas.png" width=600 alt="">'
];

const imageContainer = document.getElementById('image-container');
const generateBtn = document.getElementById('generate-btn');

function generateRandomImage() {
    const randomIndex = Math.floor(Math.random() * pic.length);
    imageContainer.innerHTML = pic[randomIndex];
}

generateBtn.addEventListener('click', generateRandomImage);
// const happyButton  = document.getElementById('btn-hapiness')
// const sadButton = document.getElementById('btn-sadness')
// const image =  document.querySelector('.img')
// const btn = document.getElementById('btn-hapiness')
// btn.addEventListener('click', function(){// привязуемо подію на клік мишки, коли відбувається натиск, то запускається функція
    
//    happyButton.disabled = true;//кнопка становиться неактивною
//    image.style.display = 'inline';// достукуємось до елементу на сторінці і прописуємо їй дисплей інлайн щоб вона стала видимою на сторінці
//    sadButton.disabled = false})// кнопка стає активною

//     sadButton.addEventListener('click', function(){// при натиску на кнопку відбувається інша дія діаметрально протилежна
//     image.style.display = 'none';// зникає картинка
//     happyButton.disabled = false;// кнопка стає активною
//     sadButton.disabled =true;// кнопка перестає бути активною
// })
// // const document = {
// //     getElementById: function(selector){
// //         return {
// //             addEventListener:function(eventName, eventCallBack){

// //             }
// //         }
// //     }
// // }
// // const obj = {
// //     getElementById: function(){
// //         console.log(1)
// //         return{
// //             addEventListener: function(){
// //                 console.log(2)
// //             }
// //         }
// //     }
// // }
// // obj.getElementById().addEventListener()