# MID Search

LINEのユーザーMIDから、プロフィール画像を検索・表示して、プロフィールにアクセスするWebアプリケーションです。

## 機能

- **MID入力**: LINEユーザーの一意識別子（MID）を入力
- **形式検証**: `u`で始まる32桁の16進数形式を自動検証
- **プロフィール取得**: LINE公開APIからプロフィール画像を取得
- **プロフィール表示**: LINEアプリでのプロフィール表示に対応

## 使い方

1. LINEのMID（例:LINE NEWS `ucae8cf5005e85d0bf1b0e36309efedba`）を入力
2. 「検索」ボタンをクリック（またはEnterキーを押す）
3. プロフィール画像が表示されます
4. 「LINEでプロフィールを開く」をクリックするとLINEアプリが起動します

### MID形式について

- `U` で開始
- 32桁の16進数（0-9, a-f）
- 例:LINE NEWS `ucae8cf5005e85d0bf1b0e36309efedba`


## 技術スタック

- **フレームワーク**: [Next.js](https://nextjs.org) 16.2.1
- **UI**: React 19.2.4
- **スタイリング**: Tailwind CSS 4
- **言語**: TypeScript 5
- **開発ツール**: ESLint 9

## セットアップ

### 前提条件
- Node.js 20以上
- pnpm（またはnpm、yarn、bun）

### インストール

```bash
# 依存パッケージをインストール
pnpm install
```

## 開発

開発サーバーを起動します：

```bash
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認します。

## ビルド

本番用にビルドします：

```bash
pnpm build
pnpm start
```

## コマンド

| コマンド | 説明 |
|---------|------|
| `pnpm dev` | 開発サーバーを起動 |
| `pnpm build` | 本番用にビルド |
| `pnpm start` | 本番サーバーを起動 |
| `pnpm lint` | ESLintで構文チェック |


## ファイル構成

```
app/
├── page.tsx              # MID検索メインページ
├── layout.tsx            # ルートレイアウト
├── globals.css           # グローバルスタイル
└── favicon.ico           # ファビコン
```

## ライセンス

MIT License
