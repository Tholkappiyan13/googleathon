import numpy as np
import sounddevice as sd
import random
from scipy import signal

# Define some notes with frequencies (you can add more notes to create a melody)
notes = {
    'C': 261.63,
    'D': 293.66,
    'E': 329.63,
    'F': 349.23,
    'G': 392.00,
    'A': 440.00,
    'B': 493.88
}

# Define a simple happy melody (sequence of notes)
happy_melody = ['C', 'D', 'E', 'G', 'A', 'D', 'E', 'G']

# Set the duration and sampling rate
duration = 0.5  # Duration of each note in seconds
sampling_rate = 44100  # Sampling rate (samples per second)

# Create an empty array to store the waveform
total_samples = int(duration * sampling_rate * len(happy_melody))
output_wave = np.zeros(total_samples)

# Generate the happy melody
start = 0
for note in happy_melody:
    frequency = notes[note]
    samples = np.arange(int(duration * sampling_rate))
    waveform = np.sin(2 * np.pi * frequency * samples / sampling_rate)
    output_wave[start:start+len(samples)] += waveform
    start += len(samples)

# Normalize the waveform
output_wave /= np.max(np.abs(output_wave))

# Play the generated melody
sd.play(output_wave, samplerate=sampling_rate)
sd.wait()
