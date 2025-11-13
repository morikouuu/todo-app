---
theme: seriph
background: https://cover.sli.dev
title: Todoアプリ開発
info: |
  ## React + TypeScript Todoアプリ

  TypeScriptとReactを使用したTodoアプリケーションの開発
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
duration: 30min
---

# Todoアプリ開発

React + TypeScript で作る
モダンなTodoアプリケーション

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    始める <carbon:arrow-right class="inline"/>
  </span>
</div>

---

## layout: default

# プロジェクト概要

<div class="grid grid-cols-2 gap-4">

<div>

## アプリケーション名

**Todoリストアプリ**

## 主な機能

- Todoタスクの追加・削除
- 期限設定と期限切れ表示
- タグによる分類
- 優先度設定（高・中・低）
- タグ・優先度での絞り込み
- LocalStorageでのデータ永続化

</div>

<div>

## デザイン

- カードベースのUI
- 3列グリッドレイアウト
- レスポンシブデザイン
- ホバーエフェクト

</div>

</div>

---

## layout: default

# 使用技術（1/2）

<div class="grid grid-cols-2 gap-6 mt-8">

<v-clicks>

<div class="border border-gray-300 rounded-lg p-4">

## React 19.1.0

- 最新のReact Hooks API
- 関数コンポーネントベース

</div>

<div class="border border-gray-300 rounded-lg p-4">

## TypeScript 5.8.3

- 型安全性の確保
- 開発体験の向上

</div>

<div class="border border-gray-300 rounded-lg p-4">

## Vite 7.0.4

- 高速な開発サーバー
- 最適化されたビルド

</div>

<div class="border border-gray-300 rounded-lg p-4">

## CSS Modules

- コンポーネント単位のスタイリング
- スコープの分離

</div>

</v-clicks>

</div>

---

## layout: default

# 使用技術（2/2）

<div class="grid grid-cols-3 gap-6 mt-8">

<v-clicks>

<div class="border border-gray-300 rounded-lg p-4">

## ESLint

- コード品質の維持
- 一貫性のあるコーディング

</div>

<div class="border border-gray-300 rounded-lg p-4">

## GitHub Pages

- 静的サイトホスティング
- 自動デプロイ対応

</div>

<div class="border border-gray-300 rounded-lg p-4">

## LocalStorage API

- クライアントサイドでのデータ永続化
- サーバー不要のデータ保存

</div>

</v-clicks>

</div>

---

# こだわったポイント

<div class="grid grid-cols-2 gap-8 mt-8">

<v-clicks>

<div class="border border-gray-300 rounded-lg p-6">

## 🎨 UI/UXデザイン

- カードベースのモダンなデザイン
- 3列グリッドレイアウト
- レスポンシブ対応
- ホバー時のアニメーション

</div>

<div class="border border-gray-300 rounded-lg p-6">

## 🔒 型安全性

- TypeScriptによる厳密な型定義
- 型推論の活用
- 実行時エラーの防止

</div>

<div class="border border-gray-300 rounded-lg p-6">

## 🛡️ エラーハンドリング

- LocalStorageデータの検証
- 不正データの自動クリア
- 日付の妥当性チェック

</div>

<div class="border border-gray-300 rounded-lg p-6">

## 🏗️ コンポーネント設計

- 責務の分離
- 再利用可能な設計
- Propsによるデータフロー

</div>

</v-clicks>

</div>

---

## layout: two-cols

# アーキテクチャ

## コンポーネント構成

<pre class="text-sm">
App.tsx
├── InputForm
│   └── Todo追加フォーム
├── TodoList
│   └── TodoCard (複数)
│       ├── チェックボックス
│       ├── タスク情報
│       └── 削除ボタン
└── FilterSection
    ├── タグフィルター
    └── 優先度フィルター
</pre>

::right::

## データフロー

```mermaid
graph TD
    A[InputForm] -->|addTask| B[App State]
    B -->|tasks| C[TodoList]
    C -->|task| D[TodoCard]
    D -->|onCheck/onDelete| B
    B -->|useEffect| E[LocalStorage]
    E -->|初期化時| B
```

---

## layout: default

# 実装のハイライト

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="border border-gray-300 rounded-lg p-6">

## 🎯 型安全なデータ管理

- TypeScriptによる厳密な型定義
- Todo型、Tag型、Priority型の定義
- 型推論による開発効率向上

</div>

<div class="border border-gray-300 rounded-lg p-6">

## ✅ データ検証

- LocalStorageから読み込んだデータの検証
- 不正なデータの自動クリア
- 型チェックによる安全性確保

</div>

<div class="border border-gray-300 rounded-lg p-6">

## 📅 日付管理

- 期限の設定と表示
- 期限切れの自動判定
- 日付の妥当性チェック

</div>

<div class="border border-gray-300 rounded-lg p-6">

## 📱 レスポンシブデザイン

- 3列→2列→1列の自動切替
- モバイル・タブレット・デスクトップ対応
- CSS Grid による柔軟なレイアウト

</div>

</div>

---

# デプロイ

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="border border-gray-300 rounded-lg p-6">

## ⚙️ ビルド設定

- Viteでの最適化ビルド
- `docs`フォルダへの出力
- 相対パスでの設定

</div>

<div class="border border-gray-300 rounded-lg p-6">

## 🚀 GitHub Pages

- 静的サイトとして公開
- 自動デプロイ対応
- 無料ホスティング

</div>

</div>

---

# まとめ

<div class="grid grid-cols-3 gap-4 mt-8">

<div>

## 技術選定

- React 19
- TypeScript
- Vite

</div>

<div>

## 設計思想

- 型安全性
- コンポーネント分割
- エラーハンドリング

</div>

<div>

## UI/UX

- モダンなデザイン
- レスポンシブ対応
- 使いやすさ

</div>

</div>

<div class="mt-12">
  <span class="text-2xl">ありがとうございました!</span>
</div>
