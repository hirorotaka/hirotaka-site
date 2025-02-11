'use client';

import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { AiFillBulb } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { FaXTwitter } from 'react-icons/fa6';

// フォームの要素の型を定義
interface ContactFormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  subject: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface ContactFormElement extends HTMLFormElement {
  readonly elements: ContactFormElements;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function Contact() {
  // useRefの型を明示的に指定
  const form = useRef<ContactFormElement>(null);

  // フォームの状態を管理
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // 入力値の変更を処理
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // すべてのフィールドが入力されているかチェック
  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== '');
  };

  // sendEmailの型を設定
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_yofrq1g', 'template_u5xrwet', form.current, {
          publicKey: '2gH2reledDt_NsV2u',
        })
        .then(
          (result) => {
            form.current?.reset();
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: '',
            });
            console.log('SUCCESS!', result.text);
            // 成功時のトースト
            toast.success('メッセージを送信しました！');
          },
          (error) => {
            console.log('FAILED...', error.text);
            // エラー時のトースト
            toast.error('送信に失敗しました。もう一度お試しください。');
          }
        );
    }
  };

  return (
    <section
      className="w-full h-fit px-[40px] md:py-20 lg:pb-40 lg:pt-10 py-10 max-xs:px-[20px] relative bg-whitesmoke"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2 mb-10">
            <span>
              <AiFillBulb />
            </span>
            コンタクト
          </p>
        </div>

        {/* 左下  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p>
              日々新しいプロジェクトを作成しています。
              <br />
              ご相談問い合わせはこちらからお気軽に連絡ください。
              <br />
              メッセージには可能な限り早く返信させていただきます。
            </p>
          </div>

          {/* 右下メールフォーム */}
          <div>
            <form ref={form} onSubmit={sendEmail} className="w-full">
              <input
                type="text"
                name="name"
                placeholder="お名前"
                value={formData.name}
                onChange={handleChange}
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="メールアドレス"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="タイトル"
                value={formData.subject}
                onChange={handleChange}
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
                required
              />
              <textarea
                name="message"
                rows={7}
                placeholder="内容"
                value={formData.message}
                onChange={handleChange}
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
                required
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!isFormValid()}
                  className={`bg-darkblue text-white font-medium py-3 px-6 rounded hover:shadow-lg 
              ${
                !isFormValid()
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-darkblue/75'
              }`}
                >
                  送信
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
