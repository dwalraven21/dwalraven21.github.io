# Ruby Blackjack

# Player Class - creates a new player
class Player
	attr_accessor :name, :hand, :bankroll, :total

	def initialize name, hand, bankroll, total
		@name = name
		@hand = []
		@bankroll = bankroll
		@total = total
	end
end

# Create a player and computer default
human = Player.new "Human", [], 100, 0
computer = Player.new "Computer", [], 10000, 0


# Deck - create a random deck of 52 playing cards
class Deck
	def initialize
		#create an array of face values, suits and an empty array for cards
		@faces = [*(2..10), 'Jack', 'Queen', 'King', 'Ace']
		@suits = ['clubs', 'spades', 'hearts', 'diamonds']
		@cards = []

		# loop through each face
		# then loop through each suit for that face
		# to generate 1 of every combo
		@faces.each do |face|
			# if face is a number make value = face
			if face.class == Integer
				value = face
			# if face is an Ace make value = 11
			elsif face == 'Ace'
				value = 11
			# Otherwise we have a face card that has a value 10
			else
				value = 10
			end
			@suits.each do |suit|
				@cards << Card.new(face, suit, value)
			end
		end
	# shuffles the array of cards
	@cards.shuffle!
	end

	# now create a function within the Deck class
	# to deal the correct number of cards
	def deal (num, player)
		# the shift method "removes a card from the deck"
		# basically it removes it from the deck array and returns the value
		num.times {@cards.shift.generate_card(player)}
	end
end

# Card Class
class Card
	attr_accessor :face, :suit, :value
	def initialize face, suit, value
		@face = face
		@suit = suit
		@value = value
	end

	# generates a new card from the deck
	# takes a parameter "player" and adds to that player's hand
	def generate_card (player)
		new_card = Card.new face, suit, value
		player.hand << new_card
		# also updates the player's total (aka the hand value)
		player.total = player.total + new_card.value
	end
end

# GAME PLAY / Console Prompts

# Get Player name
puts "Greetings human player! What is your name?"
name = gets.chomp
puts "\n\nWelcome #{name}."
human.name = "#{name}"

# Ask to play
puts "We're playing Blackjack. Would you like me to deal you in?"

# Start Game Loop
loop do
	puts "(d)eal me or (q)uit table"
	deal_me = gets.chomp.downcase
		# If player quits table, end loop
		if deal_me == "q"
			puts "Come back soon!"
			break
		else
			# reset the hand and value for players
			human.hand.clear
			human.total = 0
			computer.hand.clear
			computer.total = 0

			# deal player cards
			puts "\n\nHere are your cards:"
			deck = Deck.new
			deck.deal(2, human)
			# Tell the player the card face and suit in their hand
			# cars will be index 0 and 1 in the hand array
			puts "The #{human.hand[0].face} of #{human.hand[0].suit}"
			puts "The #{human.hand[1].face} of #{human.hand[1].suit}\n\n"

			# deal computer cards
			deck.deal(2, computer)
			# Tell the player one of the computer's cards (index 0)
			puts "The dealer has one card showing:"
			puts "The #{computer.hand[0].face} of #{computer.hand[0].suit}\n\n"

			# create a hit or stay loop until player chooses stay
			until human.total >= 21 do
				# Ask the player what they want to do next? hit or stay?
				puts "Would you like to (h)it or (s)tay?"
				choice = gets.chomp.downcase

				# if player hits deal a new card
				# tell player new card
				# add 1 to index
				if choice == 'h'
					deck.deal(1, human)
					puts "Your new card is:"
					puts "The #{human.hand[0].face} of #{human.hand[0].suit}"
					puts "The total value in your hand is:"
					puts "#{human.total}"
					puts "The dealer has one card showing:"
					puts "The #{computer.hand[0].face} of #{computer.hand[0].suit}"
				else
					# once the player stays, end the loop
					break
				end
			end
			puts "Your hand has a total value of #{human.total}"
			puts "The computer has a hand value of #{computer.total}"

			# Win / Lose Scenerios
			# if both hands are under or at 21, highest hand wins
			if human.total <= 21 && computer.total <= 21
				if human.total > computer.total
					puts "You win!\n\n"

					# Monies are exchanged
					human.bankroll += 10
					computer.bankroll -= 10

				elsif human.total < computer.total
					puts "Computer wins."

					# Monies are exchanged
					human.bankroll -= 10
					computer.bankroll += 10

				else
					puts "A tie goes to the dealter. Computer Wins."

					# Monies are exchanged
					human.bankroll -= 10
					computer.bankroll += 10
				end
			# if human is above 21, human loses
			elsif human.total > 21 && computer.total <= 21
				puts "You went over 21. Computer wins."

				# Monies are exchanged
				human.bankroll -= 10
				computer.bankroll += 10

			# if human is above 21, human loses
			elsif human.total <= 21 && computer.total > 21
				puts "Computer went over 21. You win!"

				# Monies are exchanged
				human.bankroll += 10
				computer.bankroll -= 10
			else
				# if both are above 21, no one wins.
				puts "You both went over 21. No one wins this round."

				# No Monies Exchanged
			end
			# Tell the player how much money they have
			puts "You now have $#{human.bankroll}"
			puts "The dealer now has $#{computer.bankroll}\n\n"
				if human.bankroll <= 0
					puts "Looks like you're out of money. Maybe you have a gambling problem... "
					puts "Maybe you should take a break."
					break
				else
				# Prompt to play again
				puts "Play again?"
				end
		end
	end
