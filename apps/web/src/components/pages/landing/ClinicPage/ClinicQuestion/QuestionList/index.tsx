'use client'

import ArticleIdFaqGenerator from '@components/pages/articleId/ArticleIdPageContainer/ArticleIdFaq/ArticleIdFaqGenerator';
import { Questions } from './constants';
import { useState } from 'react';

const QuestionList = () => {
    const initialData = Questions.length > 0 ? Questions[0].id : '';
    const [selectedItem, setSelectedItem] = useState(initialData);

    return <div className='m-4 grid gap-y-3'>
        {
            Questions.map((item, i) => {
                return <ArticleIdFaqGenerator
                    question={item.title}
                    answer={item.text}
                    id={item.id}
                    key={i}
                    selectedItem={selectedItem}
                    selectedItemHandler={(id) => setSelectedItem(id)} />
            })
        }
    </div>
}

export default QuestionList;