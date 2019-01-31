# 🍇 Grapes

The Grapes CLI tool was created after experiencing increasing frustration while working with massive CloudFormation file. While we are amazed by what AWS CloudFormation can do and how it helps us manage the AWS infrastructure, working with one gigantic file is too labor intensive and prone to countless errors and frustration. 

We decided to do something about this, and create Grapes, a simple CLI tools which will cut down your time in creating a Stack in hals, and will make the whole process more enjoyable and easy to organize, and extend.

Grapes gives you the ability to break down the entire CloudFormation file structure into smaller chunks, which makes it much easier to reason about. You can literally organize the folder structure however makes sense to you – no constrains.

We use Grapes almost every day, and we hope you will too.

# How to Install

```
] sudo npm install -g @0x4447/grapes
```

# How to Use

```
] grapes -b -s .
```

# Where to get Help

```
] grapes -h
```

# What to Expect

### The build feature

When using the build feature a `CloudFormation.json` file will appear in the folder that you pointed using the `-s` parameter. The file will contain the final CloudFormation file that you can upload straight to AWS for deployment. This file will be overwritten very time you run the `build` command.

### The init feature

The initialization command will create a complete folder structure in the path that you specified. The end result is the exact structure that Graps expects when building the final file. Do not change the folder names, this is the only requirement for the tool. Anything inside this folders is up to you. You can name your files however you want and you can organize them in whatever folder structure makes sense to you.

# The End

If you enjoyed this project, please consider giving it a 🌟. And check out our [0x4447 GitHub account](https://github.com/0x4447), where you'll find additional resources you might find useful or interesting.

## Sponsor 🎊

This project is brought to you by 0x4447 LLC, a software company specializing in building custom solutions on top of AWS. Follow this link to learn more: https://0x4447.com. Alternatively, send an email to [hello@0x4447.email](mailto:hello@0x4447.email?Subject=Hello%20From%20Repo&Body=Hi%2C%0A%0AMy%20name%20is%20NAME%2C%20and%20I%27d%20like%20to%20get%20in%20touch%20with%20someone%20at%200x4447.%0A%0AI%27d%20like%20to%20discuss%20the%20following%20topics%3A%0A%0A-%20LIST_OF_TOPICS_TO_DISCUSS%0A%0ASome%20useful%20information%3A%0A%0A-%20My%20full%20name%20is%3A%20FIRST_NAME%20LAST_NAME%0A-%20My%20time%20zone%20is%3A%20TIME_ZONE%0A-%20My%20working%20hours%20are%20from%3A%20TIME%20till%20TIME%0A-%20My%20company%20name%20is%3A%20COMPANY%20NAME%0A-%20My%20company%20website%20is%3A%20https%3A%2F%2F%0A%0ABest%20regards.).
