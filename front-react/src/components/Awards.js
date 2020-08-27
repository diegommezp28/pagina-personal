import React from 'react';
import "./AwardsStyles.css";

function Awards(props) {
    return (
        <div id="Awards" className="m-5 bg-light ">
            <h3 className="text-center m-5 principal-title">Awards</h3>
            <ul>
                <li>
                    <p>Second place at the University's first semester contest "Expoandes"</p>
                </li>
                <li>
                    <p>Alberto Magno distinction at Universidad de los Andes for having one of the 10 best scores
                    from all whom apply for 2017's second semester admissions.
                    </p>
                </li>
                <li>
                    <p>2016 11th grade finalist (top 10) to Colombia's Education Ministry's contest "Supérate con el Saber", 
                        from over a million total contestants  </p>
                </li>
                <li>
                    <p>Hometown Highschool Futsal champion in 2016 with my school team. MVP of the final match scoring 4 goals.</p>
                </li>
                <li>
                    <p>Won a total of 8 regional highschool Math Olympics between 2013 and 2016.</p>
                </li>
                <li>
                    <p> National Math Olympics Finalist in 2014</p>
                </li>
                <li>
                    <p> National Math Olympics Semifinalist in 2016</p>
                </li>
                <li>
                    <p> National Physics Semifinalist Olympics in 2016</p>
                </li>


            </ul>

        </div>
    );
}

export default Awards;