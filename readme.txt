Github commands for connecting Local Repo TO Remote Repo 

Conventions:
1. By convention, all the repositories in our github account are referred to as "origin"

2. Use: git remote -v , to check all the github repos that are connected to your local repo 

Step1: First create a repo in the Github

Step2: 
      (This step has to be done only once, while linking remote to local repo)
      git remote add origin https://github.com/blablablabla.com

Step3:
      git push origin master
      (Whatever changes we have made in our local repo, we push those changes to the "origin" repo to which we have linked)