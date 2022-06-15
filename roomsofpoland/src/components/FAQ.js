import React from "react";
import "../style/faq.scss";

function FAQ({...props}) {

    return (
        <div className="FAQ-description">
            <h1>
                Najczęściej zadawane pytania
            </h1>

            {(props.question.map(function(faq) {
                        return (

                                <div className="question-answer" key={faq.id}>
                                <p className="question">{faq.question}</p>
                                <p className="answer">{faq.answer}</p>
                                </div>
                        )
                    }
                )
            )}
        </div>
    )
}

export default FAQ;