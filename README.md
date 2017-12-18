# meteor-react-antd
Starter Kit : Meteor + React + Redux + React Router + Ant Design

### ▶️ Installation
1. Clone repo
2. ```cd``` ke working directory
3. run ```meteor npm install ```
4. run ```meteor``` to start (default meteor port 3000 - ```http://localhost:3000```)

### ▶️ Overwrite Ant Design LESS Variables
1. Edit file ```/antd_overwrite.less```
2. run ```lessc --clean-css antd_overwrite.less ./public/antd.min.css```

### ▶️ Recommended Folder Structure

#### Client Side
* ```/imports/views/``` : screen source files
* ```/imports/components/``` : universal/reusable/shareable components source files
* ```/imports/reducers/``` : reducers action source files (entry file index.js)

#### Server Side
* ```/server/apis/``` : APIs source files (entry file index.js)

### ▶️ Important Notes
* Change git remote uri
