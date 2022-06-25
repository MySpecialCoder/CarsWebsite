import React from 'react'
import second from '../images/second.jpg'
import first from '../images/first.jpg'
import third from '../images/third.jpg'
import css from '../componentcss/Main.css'

export default function Main(props) {
  return (
    <>
    <div className="headingall my-3">
        <h1>{props.heading}</h1>
        </div>
        <div className="section1 sec">
        <img src={first} class="img-thumbnail my-3 mx-3 " alt="..."/>
        <p className='my-4 mx-3'>Bugatti cars were extremely successful in racing. The little Bugatti Type 10 swept the top four positions at its first race. The 1924 Bugatti Type 35 is one of the most successful racing cars. The Type 35 was developed by Bugatti with master engineer and racing driver Jean Chassagne who also drove it in the car's first ever Grand Prix in 1924 Lyon. Bugattis swept to victory in the Targa Florio for five years straight from 1925 through 1929. Louis Chiron held the most podiums in Bugatti cars, and the modern marque revival Bugatti Automobiles S.A.S. named the 1999 Bugatti 18/3 Chiron concept car in his honour. But it was the final racing success at Le Mans that is most remembered—Jean-Pierre Wimille and Pierre Veyron won the 1939 race with just one car and meagre resources.</p>
        </div>
        
          <div className="section1 section2">
        <img src={second} class="img-thumbnail my-3 mx-3 " alt="..."/>
        <p className='my-4 mx-3'>On 6 September 1939, Enzo Ferrari left Alfa Romeo under the provision that he would not use the Ferrari name in association with races or racing cars for at least four years. A few days later he founded Auto Avio Costruzioni, headquartered in the facilities of the old Scuderia Ferrari in Modena. The new company ostensibly produced machine tools and aircraft parts but in 1940 Ferrari did in fact build two examples of a race car – the Auto Avio Costruzioni 815, based on a Fiat 508C platform. It was the first Ferrari car and debuted at the 1940 Mille Miglia, but due to World War II it saw little competition. In 1943 the Ferrari factory moved to Maranello, where it has remained ever since. During the war the company's focus was mostly on fabricating grinding machines which were copies of original German tooling machines. The factory was bombed by the Allies between 1944 and 1945, but it was quickly rebuilt. In late 1945, after the war ended, Ferrari commissioned Gioacchino Colombo the design of a new V12 engine. In December 1946 Ferrari released to the press the specifications and drawings of his new car.</p>
        </div> 
        
         <div className="section1 section3">
        <img src={third} class="img-thumbnail my-3 mx-3 " alt="..."/>
        <p className='my-4 mx-3'>The Porsche 911 (pronounced Nine Eleven or in German: Neunelfer) is a two-door 2+2 high performance rear-engined sports car introduced in September 1964 by Porsche AG of Stuttgart, Germany. It has a rear-mounted flat-six engine and originally a torsion bar suspension. The car has been continuously enhanced through the years but the basic concept has remained unchanged. The engines were air-cooled until the introduction of the 996 series in 1998.
        The 911 has been raced extensively by private and factory teams, in a variety of classes. It is among the most successful competition cars. In the mid-1970s, the naturally aspirated 911 Carrera RSR won world championship races including Targa Florio and the 24 Hours of Daytona. The 911-derived 935 turbo also won the 24 Hours of Le Mans in 1979. Porsche won the World Championship for Makes in 1976, 1977, 1978, and 1979 with 911-derived models.</p>
        </div>
        
    </>
  )
}
