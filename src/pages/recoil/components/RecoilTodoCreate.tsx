import React, {useCallback, useState} from 'react';
import {MdAdd} from 'react-icons/md';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {createTodo, nextIdState} from '../state';
import styled, {css} from 'styled-components';

const CircleButton: any = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${(props: any) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function RecoilTodoCreate() {
  const emitCreateTodo: any = useSetRecoilState(createTodo);
  const nextId = useRecoilValue(nextIdState);
  const [open, setOpen]: any = useState(false);
  const [value, setValue] = useState('');

  const handleToggle = () => setOpen(!open);
  const handleChange = (e: any) => setValue(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault(); // 새로고침 방지
    emitCreateTodo(
      {
        id: nextId,
        text: value,
        done: false,
      },
      [],
    );

    setValue(''); // input 초기화
    setOpen(false); // open 닫기
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={handleSubmit}>
            <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" onChange={handleChange} value={value} />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={handleToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(RecoilTodoCreate);
