#!/bin/bash


# HEADSHOT
for f in *; do pushd $f/WebCamPicture; mv *.gif headshot.gif; popd; done;

for f in *; do pushd $f/WebCamPicture; mv *.png headshot.png; popd; done;

for f in *; do pushd $f/WebCamPicture; mv *.jpeg headshot.jpeg; popd; done;

for f in *; do pushd $f/WebCamPicture; mv *.jpg headshot.jpg; popd; done;


# COVER
for f in *; do pushd $f/ProjectCoverImage; mv *.gif cover.gif; popd; done;

for f in *; do pushd $f/ProjectCoverImage; mv *.png cover.png; popd; done;

for f in *; do pushd $f/ProjectCoverImage; mv *.PNG cover.PNG; popd; done;

for f in *; do pushd $f/ProjectCoverImage; mv *.jpeg cover.jpeg; popd; done;

for f in *; do pushd $f/ProjectCoverImage; mv *.jpg cover.jpg; popd; done;

for f in *; do pushd $f/ProjectCoverImage; mv *.JPG cover.JPG; popd; done;


# FINAL IMAGES
for f in *; do pushd $f/ProjectFinalImages; i=1; 
	for g in *.png; do mv "$g" final-$i.png; i=$((i+1)); done; 
popd; done

for f in *; do pushd $f/ProjectFinalImages; i=1; 
	for g in *.jpg; do mv "$g" final-$i.jpg; i=$((i+1)); done; 
popd; done

for f in *; do pushd $f/ProjectFinalImages; i=1; 
	for g in *.jpeg; do mv "$g" final-$i.jpeg; i=$((i+1)); done; 
popd; done

for f in *; do pushd $f/ProjectFinalImages; i=1; 
	for g in *.gif; do mv "$g" final-$i.gif; i=$((i+1)); done; 
popd; done

for f in *; do pushd $f/ProjectFinalImages; i=1; 
	for g in *.mp4; do mv "$g" final-$i.mp4; i=$((i+1)); done; 
popd; done

for f in *; do pushd $f/ProjectFinalImages; i=1; 
	for g in *.JPG; do mv "$g" final-$i.JPG; i=$((i+1)); done; 
popd; done

for f in *; do pushd $f/ProjectFinalImages; i=1; 
	for g in *.PNG; do mv "$g" final-$i.PNG; i=$((i+1)); done; 
popd; done


# PROCESS IMAGES
for f in *; do pushd $f/ProjectProcessImages; i=1; 
	for g in *.png; do mv "$g" process-$i.png; i=$((i+1)); done; 
popd; done

for f in *; do pushd $f/ProjectProcessImages; i=1; 
	for g in *.jpg; do mv "$g" process-$i.jpg; i=$((i+1)); done; 
popd; done

for f in *; do pushd $f/ProjectProcessImages; i=1; 
	for g in *.jpeg; do mv "$g" process-$i.jpeg; i=$((i+1)); done; 
popd; done

for f in *; do pushd $f/ProjectProcessImages; i=1; 
	for g in *.mp4; do mv "$g" process-$i.mp4; i=$((i+1)); done; 
popd; done

for f in *; do pushd $f/ProjectProcessImages; i=1; 
	for g in *.gif; do mv "$g" process-$i.gif; i=$((i+1)); done; 
popd; done

for f in *; do pushd $f/ProjectProcessImages; i=1; 
	for g in *.JPG; do mv "$g" process-$i.JPG; i=$((i+1)); done; 
popd; done

for f in *; do pushd $f/ProjectProcessImages; i=1; 
	for g in *.PNG; do mv "$g" process-$i.PNG; i=$((i+1)); done; 
popd; done

