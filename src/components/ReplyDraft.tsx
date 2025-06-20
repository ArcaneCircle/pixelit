import { useRef, useCallback, useContext } from "react";

import { ManagerContext } from "~/contexts.ts";

import PrimaryButton from "~/components/PrimaryButton";

const containerStyle = {
  display: "flex",
  flexDirection: "row" as "row",
  justifyContent: "space-between",
  flexWrap: "nowrap" as "nowrap",
  gap: "12px",
  padding: "12px",
  backgroundColor: "hsl(240,16%,19%)",
  position: "fixed" as "fixed",
  bottom: 0,
  width: "calc(100% - 24px)",
};

const inputStyle = {
  color: "#ddd9e8",
  backgroundColor: "hsl(240,16%,19%)",
  border: 0,
  outline: 0,
  margin: 0,
  padding: 0,
  flexGrow: 1,
};

interface Props {
  postId: string;
}

export default function ReplyDraft({ postId }: Props) {
  const manager = useContext(ManagerContext);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = useCallback(() => {
    if (!inputRef.current) return;
    const text = inputRef.current.value || "";
    if (!text) return;
    manager.reply(postId, text);
    inputRef.current.value = "";
  }, [postId, inputRef, manager]);

  const hint = "Write a reply...";

  return (
    <div style={containerStyle}>
      <input ref={inputRef} style={inputStyle} placeholder={hint} type="text" />
      <PrimaryButton onClick={onClick}>Send</PrimaryButton>
    </div>
  );
}
