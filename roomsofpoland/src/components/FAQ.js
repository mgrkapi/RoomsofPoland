import React from "react";

function FAQ({...props}) {

    return (
        <div>
            <h1>
                Najczęściej zadawane pytania
            </h1>
            <p>
                Poniżej znajdą Państwo pytania, które najczęściej zadają nasi Goście.
            </p>
            <p>
                Jeśli macie Państwo inne pytania lub wątpliwości to prosimy o kontakt.
            </p>

            {(props.question.map(function(faq) {
                        return (

                                <div key={faq.id}>
                                <p >{faq.question}</p>
                                <p >{faq.answer}</p>
                                </div>
                        )
                    }
                )
            )}
        </div>
    )
}

export default FAQ;