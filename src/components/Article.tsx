import { Button, Typography, Box, Paper } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import imgLink from "../assets/whitesection-img.svg";
import ApiService from "../services/api";
import LoadingScreen from "./Loading";
import * as React from 'react';

function Article() {
    // const [loading, setLoading] = useState(false)

    // useEffect(() =>{
    //     setLoading(true)
    //     setTimeout(() =>{
    //         setLoading(false)

    //     }, 1000)
    // }, []);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await ApiService.getAllItems();
    //         setItems(result);
    //         console.log(result);
    //     };
    //     fetchData();
    // }, []);
    // https://www.youtube.com/watch?v=SR8755C0bME

    const article = {
        title: 'Бухгалтерия за 5 минут',
        video_link: 'https://www.youtube.com/watch?v=Ta6pNPK3wig&t=2s',
        date: '22.06.2025',
        html_data: ''
    }

    const ref = useRef(null);
    let heightBox = 0;
    React.useEffect(() => {
        // heightBox = ref.current.offsetHeight;
    }, []);

    return (
        <>
            {
                // loading? <LoadingScreen/>
                // :

                <Box ref={ref} mt={10} ml={20} mr={20} style={{ position: 'relative', top: '-571px', height: '1400px'}}>
                    <div className="articleTitleWrapper">
                        <h1 className="articleTitle">{article.title}</h1>
                        <hr style={{
                            color: 'white',
                            backgroundColor: 'white',
                            height: 1,
                            width: '50%'
                        }} />
                        <h2 className="articleDate">{article.date}</h2>
                    </div>
                    <p>
                        В бухгалтерии важно правильно вести учет финансовых операций. Это помогает контролировать расходы и доходы компании. Бухгалтерия также занимается составлением отчетности и налоговых деклараций. Важно следить за соблюдением законодательства и правил бухгалтерского учета.

                        Бухгалтерия должна иметь хорошую организацию и структуру. В ней должны быть определены все процессы и процедуры. Также важно иметь хорошую систему контроля и аудита.

                        Бухгалтерия должна быть в курсе всех изменений в законодательстве и налоговом кодексе. Это поможет избежать штрафов и проблем с налоговой инспекцией.

                        В бухгалтерии необходимо использовать специальное программное обеспечение для учета финансовых операций. Это поможет автоматизировать процессы и сократить время на выполнение задач.
                        <img src={imgLink} style={{ float: "left" }} alt="" />
                    </p>
                    <p>
                        В бухгалтерии важно правильно вести учет финансовых операций. Это помогает контролировать расходы и доходы компании. Бухгалтерия также занимается составлением отчетности и налоговых деклараций. Важно следить за соблюдением законодательства и правил бухгалтерского учета.

                        Бухгалтерия должна иметь хорошую организацию и структуру. В ней должны быть определены все процессы и процедуры. Также важно иметь хорошую систему контроля и аудита.

                        Бухгалтерия должна быть в курсе всех изменений в законодательстве и налоговом кодексе. Это поможет избежать штрафов и проблем с налоговой инспекцией.

                        В бухгалтерии необходимо использовать специальное программное обеспечение для учета финансовых операций. Это поможет автоматизировать процессы и сократить время на выполнение задач.

                        В бухгалтерии важно правильно вести учет финансовых операций. Это помогает контролировать расходы и доходы компании. Бухгалтерия также занимается составлением отчетности и налоговых деклараций. Важно следить за соблюдением законодательства и правил бухгалтерского учета.

                        Бухгалтерия должна иметь хорошую организацию и структуру. В ней должны быть определены все процессы и процедуры. Также важно иметь хорошую систему контроля и аудита.

                        Бухгалтерия должна быть в курсе всех изменений в законодательстве и налоговом кодексе. Это поможет избежать штрафов и проблем с налоговой инспекцией.

                        В бухгалтерии необходимо использовать специальное программное обеспечение для учета финансовых операций. Это поможет автоматизировать процессы и сократить время на выполнение задач.
                    </p>
                    <p>
                        Бухгалтерия - это важная составляющая любого бизнеса, которая позволяет управлять финансами компании и отслеживать все финансовые операции. Без правильно настроенной бухгалтерии, любая компания рискует потерять деньги и столкнуться с серьезными проблемами.

                        В рамках работы бухгалтеры занимаются множеством задач - начиная от ведения учета до подготовки налоговой отчетности. Они должны быть внимательными, дисциплинированными и точными, чтобы избегать ошибок, которые могут привести к финансовым проблемам.

                        Сегодня бухгалтерия уже не та отделение, что было раньше. С развитием технологий и программного обеспечения, бухгалтерия стала более автоматизированной и эффективной. Это позволяет бухгалтерам сосредоточиться на более сложных задачах и уменьшить количество ручной работы.

                        В общем, хорошо организованная бухгалтерия является важной частью любого успешного бизнеса. Она позволяет компании контролировать свои финансы и принимать важные стратегические решения, что помогает ей быть конкурентноспособной на рынке.
                    </p>
                    <img src={imgLink} alt="" />
                    <Paper elevation={6} sx={{ display: "flex", justifyContent: "spaceBetween", alignItems: "center" }}
                        style={{
                            width: '380px', height: '54px', borderRadius: '15px'
                        }}>
                        Hello
                    </Paper>
                </Box>
            }

        </>
    );
}

export default Article;