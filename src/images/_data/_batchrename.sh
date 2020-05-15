#!/bin/bash

shopt -s nullglob
pushd projects

# HEADSHOT
for f in *; do pushd $f/WebCamPicture || { echo 'pushd failed!' ; exit 1; };
	for g in *; do
		printf -v newfile 'headshot.%s' "${g##*.}"
		mv "$g" "$newfile"
	done
popd; done


# COVER
for f in *; do pushd $f/ProjectCoverImage || { echo 'pushd failed!' ; exit 1; };
	for g in *; do
		printf -v newfile 'cover.%s' "${g##*.}"
		mv "$g" "$newfile"
	done
popd; done


# FINAL IMAGES
for f in *; do pushd $f/ProjectFinalImages || { echo 'pushd failed!' ; exit 1; };
	n=1;
	for g in *; do
		printf -v newfile 'final-%d.%s' $((n++)) "${g##*.}"
		mv "$g" "$newfile"
	done
popd; done


# PROCESS IMAGES
for f in *; do pushd $f/ProjectProcessImages || { echo 'pushd failed!' ; exit 1; };
	n=1;
	for g in *; do
		printf -v newfile 'process-%d.%s' $((n++)) "${g##*.}"
		mv "$g" "$newfile"
	done
popd; done

popd
