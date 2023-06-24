import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import ApiService from "../services/api";
import { useParams } from "react-router-dom";

function Article() {
    // const [loading, setLoading] = useState(false)
    const [dataArticle, setDataArticle] = useState("")
    let { id } = useParams();

    useEffect(() => {
        if (id) {
            let responseArticle = ApiService.getArticle(parseInt(id))
            responseArticle.then((data) => { setDataArticle(data.data.body) })

            console.log('article', dataArticle);
        }
    }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await ApiService.getAllItems();
    //         setItems(result);
    //         console.log(result);
    //     };
    //     fetchData();
    // }, []);

    // const article = {
    //     title: 'Бухгалтерия за 5 минут',
    //     video_link: 'https://www.youtube.com/watch?v=Ta6pNPK3wig&t=2s',
    //     date: '22.06.2025',
    //     html_data: ''
    // }
    const HtmlComponent = ({ htmlString }: { htmlString: string }) => (
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    );

    async function handleSubmit() {
        //send data to server
        let response = ApiService.setPublishedStatus(
            {
                record_id: parseInt(id || ''),
                published: true
            }
        );
        let result = await response;
        console.log('published in article', result);

        console.log('hereeeee')
    }


    return (
        <>
            <Box mt={10} ml={20} mr={20}>
                {/* {dataArticle} */}
                <HtmlComponent htmlString={dataArticle} />
                {/* <p>
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
                            <img src={imgLink} alt="" style={{ float: "right" }} />
                        </p>
                        <p>
                            Бухгалтерия - это важная составляющая любого бизнеса, которая позволяет управлять финансами компании и отслеживать все финансовые операции. Без правильно настроенной бухгалтерии, любая компания рискует потерять деньги и столкнуться с серьезными проблемами.

                            В рамках работы бухгалтеры занимаются множеством задач - начиная от ведения учета до подготовки налоговой отчетности. Они должны быть внимательными, дисциплинированными и точными, чтобы избегать ошибок, которые могут привести к финансовым проблемам.

                            Сегодня бухгалтерия уже не та отделение, что было раньше. С развитием технологий и программного обеспечения, бухгалтерия стала более автоматизированной и эффективной. Это позволяет бухгалтерам сосредоточиться на более сложных задачах и уменьшить количество ручной работы.

                            В общем, хорошо организованная бухгалтерия является важной частью любого успешного бизнеса. Она позволяет компании контролировать свои финансы и принимать важные стратегические решения, что помогает ей быть конкурентноспособной на рынке.
                        </p>
                        <Button href={article.video_link} target="_blanc" sx={{
                            backgroundColor: 'white',
                            display: "flex", justifyContent: "spaceBetween", alignItems: "center", marginBottom: '40px',
                            boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.25)', color: "#1F1B4C"
                        }}
                            style={{
                                width: '380px', height: '54px', borderRadius: '15px'
                            }}>Перейти на видео</Button> */}

                <Button href="https://www.youtube.com/watch?v=f6rAjdMY8lg" target="_blanc" sx={{
                    backgroundColor: 'white',
                    display: "flex", justifyContent: "spaceBetween", alignItems: "center", marginBottom: '40px',
                    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.25)', color: "#1F1B4C"
                }}
                    style={{
                        width: '380px', height: '54px', borderRadius: '15px'
                    }}>Перейти на видео</Button>
                <Button onClick={handleSubmit} sx={{
                    backgroundColor: 'white',
                    display: "flex", justifyContent: "spaceBetween", alignItems: "center", marginBottom: '40px',
                    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.25)', color: "#1F1B4C"
                }}
                    style={{
                        width: '380px', height: '54px', borderRadius: '15px'
                    }}>Опубликовать</Button>
            </Box>

        </>
    );
}

export default Article;